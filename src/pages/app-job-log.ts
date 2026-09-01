import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

type JobEntry = {
  id: string;
  date: string;
  employer: string;
  address: string;
  contactBy: string;
  contactName: string;
  position: string;
  results: string;
  submitted: string;
};

type JobLogProfile = {
  name: string;
  claimNumber: string;
  emailTo: string;
};

const STORAGE_KEY = 'job-log.entries.v1';
const PROFILE_KEY = 'job-log.profile.v1';
const TEMPLATE_BASE = '/job-log-template/files/';
const TEMPLATE_MANIFEST = '/job-log-template/manifest.txt';
const WORD_NAMESPACE = 'http://schemas.openxmlformats.org/wordprocessingml/2006/main';

const emptyEntry = (): JobEntry => ({
  id: crypto.randomUUID(),
  date: new Date().toISOString().slice(0, 10),
  employer: '',
  address: '',
  contactBy: 'Online',
  contactName: '',
  position: '',
  results: '',
  submitted: 'Yes',
});

@customElement('app-job-log')
export class AppJobLog extends LitElement {
  @state() private profile: JobLogProfile = {
    name: '',
    claimNumber: '',
    emailTo: '',
  };

  @state() private entries: JobEntry[] = [emptyEntry()];
  @state() private status = '';

  static override readonly styles = css`
    :host {
      display: block;
      min-height: 100vh;
      background: #f4f7f9;
      color: #23313f;
    }

    main {
      max-width: 1220px;
      margin: 0 auto;
      padding: 1rem;
    }

    .topbar {
      display: flex;
      align-items: end;
      justify-content: space-between;
      gap: 1rem;
      margin: 0.25rem 0 1rem;
      flex-wrap: wrap;
    }

    h1 {
      margin: 0;
      font-size: 2rem;
      line-height: 1.1;
      color: #1f2a36;
    }

    .subtitle {
      margin: 0.35rem 0 0;
      color: #5f6f7f;
      line-height: 1.45;
      max-width: 760px;
    }

    .actions {
      display: flex;
      gap: 0.65rem;
      flex-wrap: wrap;
      justify-content: flex-end;
    }

    button,
    .email-link {
      min-height: 42px;
      border: 1px solid #b9c6d3;
      border-radius: 6px;
      background: #ffffff;
      color: #23313f;
      cursor: pointer;
      font: inherit;
      font-weight: 800;
      padding: 0.65rem 0.9rem;
      text-decoration: none;
    }

    button.primary,
    .email-link.primary {
      background: #146c63;
      border-color: #146c63;
      color: #ffffff;
    }

    button.danger {
      color: #a12727;
      border-color: #deb8b8;
    }

    button:hover,
    .email-link:hover {
      box-shadow: 0 0 0 4px rgba(20, 108, 99, 0.12);
    }

    .panel {
      background: #ffffff;
      border: 1px solid #d7e0e8;
      border-radius: 8px;
      padding: 1rem;
      box-shadow: 0 6px 16px rgba(31, 42, 54, 0.06);
      margin-bottom: 1rem;
    }

    .profile-grid {
      display: grid;
      grid-template-columns: 1.2fr 0.8fr 1.2fr;
      gap: 0.8rem;
    }

    .entry-grid {
      display: grid;
      grid-template-columns: repeat(12, minmax(0, 1fr));
      gap: 0.75rem;
      align-items: end;
    }

    label {
      display: grid;
      gap: 0.3rem;
      color: #425466;
      font-size: 0.86rem;
      font-weight: 800;
    }

    input,
    select,
    textarea {
      width: 100%;
      min-width: 0;
      box-sizing: border-box;
      border: 1px solid #bdc9d6;
      border-radius: 6px;
      padding: 0.62rem 0.68rem;
      color: #1f2a36;
      background: #ffffff;
      font: inherit;
      font-size: 0.98rem;
    }

    textarea {
      min-height: 82px;
      resize: vertical;
    }

    input:focus,
    select:focus,
    textarea:focus {
      outline: 3px solid rgba(20, 108, 99, 0.2);
      border-color: #146c63;
    }

    .span-2 { grid-column: span 2; }
    .span-3 { grid-column: span 3; }
    .span-4 { grid-column: span 4; }
    .span-5 { grid-column: span 5; }
    .span-6 { grid-column: span 6; }
    .span-12 { grid-column: 1 / -1; }

    .entry-head {
      display: flex;
      justify-content: space-between;
      gap: 0.75rem;
      align-items: center;
      margin-bottom: 0.8rem;
    }

    .entry-title {
      margin: 0;
      color: #1f2a36;
      font-size: 1.1rem;
    }

    .preview-wrap {
      overflow-x: auto;
    }

    table {
      width: 100%;
      border-collapse: collapse;
      min-width: 980px;
      background: #ffffff;
    }

    th,
    td {
      border: 1px solid #9da9b5;
      padding: 0.55rem;
      vertical-align: top;
      text-align: left;
      line-height: 1.35;
    }

    th {
      background: #e9eef2;
      color: #1f2a36;
      text-align: center;
      font-size: 0.84rem;
    }

    .muted {
      color: #687787;
      font-size: 0.92rem;
    }

    .status {
      min-height: 1.4rem;
      color: #146c63;
      font-weight: 800;
    }

    @media (max-width: 820px) {
      main {
        padding: 0.75rem;
      }

      h1 {
        font-size: 1.6rem;
      }

      .profile-grid,
      .entry-grid {
        grid-template-columns: 1fr;
      }

      .span-2,
      .span-3,
      .span-4,
      .span-5,
      .span-6,
      .span-12 {
        grid-column: 1;
      }

      .actions {
        justify-content: stretch;
        width: 100%;
      }

      button,
      .email-link {
        flex: 1;
      }
    }
  `;

  override connectedCallback() {
    super.connectedCallback();
    this.loadSavedData();
  }

  private loadSavedData() {
    const savedProfile = localStorage.getItem(PROFILE_KEY);
    const savedEntries = localStorage.getItem(STORAGE_KEY);

    if (savedProfile) {
      this.profile = { ...this.profile, ...JSON.parse(savedProfile) as JobLogProfile };
    }

    if (savedEntries) {
      const parsedEntries = JSON.parse(savedEntries) as JobEntry[];
      this.entries = parsedEntries.length ? parsedEntries : [emptyEntry()];
    }
  }

  private saveData() {
    localStorage.setItem(PROFILE_KEY, JSON.stringify(this.profile));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this.entries));
    this.status = 'Saved on this device.';
  }

  private updateProfile(field: keyof JobLogProfile, value: string) {
    this.profile = { ...this.profile, [field]: value };
    this.saveData();
  }

  private updateEntry(id: string, field: keyof JobEntry, value: string) {
    this.entries = this.entries.map((entry) =>
      entry.id === id ? { ...entry, [field]: value } : entry
    );
    this.saveData();
  }

  private addEntry() {
    this.entries = [...this.entries, emptyEntry()];
    this.saveData();
  }

  private removeEntry(id: string) {
    this.entries = this.entries.length > 1
      ? this.entries.filter((entry) => entry.id !== id)
      : [emptyEntry()];
    this.saveData();
  }

  private async downloadDocument() {
    this.saveData();

    const files = await this.buildFilledDocx();
    const blob = new Blob([this.createZip(files)], {
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = this.documentFileName();
    document.body.append(link);
    link.click();
    link.remove();
    URL.revokeObjectURL(url);
    this.status = `Downloaded ${link.download}. Attach it to your email.`;
  }

  private emailHref() {
    const subject = encodeURIComponent('Job Search Log');
    const body = encodeURIComponent(
      `Hello,\n\nPlease see my attached job search log.\n\nName: ${this.profile.name}\nClaim Number: ${this.profile.claimNumber}\n\nThank you.`
    );

    return `mailto:${encodeURIComponent(this.profile.emailTo)}?subject=${subject}&body=${body}`;
  }

  private documentFileName() {
    const name = this.profile.name.trim().replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '');
    const date = new Date().toISOString().slice(0, 10);
    return `${name || 'Job'}-Search-Log-${date}.docx`;
  }

  private formatDate(value: string) {
    if (!value) {
      return '';
    }

    const [year, month, day] = value.split('-');
    return `${month}/${day}/${year}`;
  }

  private async buildFilledDocx() {
    const files = await this.fetchTemplateFiles();
    const decoder = new TextDecoder();
    const encoder = new TextEncoder();
    const documentPart = files.find((file) => file.path === 'word/document.xml');

    if (!documentPart) {
      throw new Error('The submitted job log template is missing word/document.xml.');
    }

    const xml = decoder.decode(documentPart.data);
    const parser = new DOMParser();
    const doc = parser.parseFromString(xml, 'application/xml');
    const table = doc.getElementsByTagNameNS(WORD_NAMESPACE, 'tbl')[0];

    if (!table) {
      throw new Error('The submitted job log template does not contain the expected table.');
    }

    const rows = Array.from(table.children).filter((child) => child.localName === 'tr');
    const metaRow = rows[1];
    const footerRow = rows[rows.length - 1];
    const templateDataRows = rows.slice(3, -1);
    const blankRowTemplate = templateDataRows[templateDataRows.length - 1] ?? rows[3];
    const rowCount = Math.max(templateDataRows.length, this.entries.length, 1);

    this.setCellText(doc, metaRow, 0, `Name: ${this.profile.name}`);
    this.setCellText(doc, metaRow, 1, `Claim Number: ${this.profile.claimNumber}`);

    templateDataRows.forEach((row) => table.removeChild(row));

    for (let index = 0; index < rowCount; index += 1) {
      const row = blankRowTemplate.cloneNode(true) as Element;
      this.clearRow(doc, row);

      const entry = this.entries[index];
      if (entry) {
        this.setCellText(doc, row, 0, this.formatDate(entry.date));
        this.setCellText(doc, row, 1, [entry.employer, entry.address].filter(Boolean).join('\n'));
        this.setCellText(doc, row, 2, entry.contactBy);
        this.setCellText(doc, row, 3, entry.contactName);
        this.setCellText(doc, row, 4, entry.position);
        this.setCellText(doc, row, 5, entry.results);
        this.setCellText(doc, row, 6, entry.submitted);
      }

      table.insertBefore(row, footerRow);
    }

    documentPart.data = encoder.encode(new XMLSerializer().serializeToString(doc));
    return files;
  }

  private async fetchTemplateFiles() {
    const manifestResponse = await fetch(TEMPLATE_MANIFEST);
    if (!manifestResponse.ok) {
      throw new Error('Could not load the submitted job log template manifest.');
    }

    const manifest = await manifestResponse.text();
    const paths = manifest.split(/\r?\n/).map((path) => path.trim()).filter(Boolean);

    return Promise.all(paths.map(async (path) => {
      const response = await fetch(`${TEMPLATE_BASE}${path.split('/').map(encodeURIComponent).join('/')}`);
      if (!response.ok) {
        throw new Error(`Could not load template file: ${path}`);
      }

      return {
        path,
        data: new Uint8Array(await response.arrayBuffer()),
      };
    }));
  }

  private clearRow(doc: XMLDocument, row: Element) {
    this.getCells(row).forEach((_cell, index) => this.setCellText(doc, row, index, ''));
  }

  private setCellText(doc: XMLDocument, row: Element | undefined, cellIndex: number, value: string) {
    if (!row) {
      return;
    }

    const cell = this.getCells(row)[cellIndex];
    if (!cell) {
      return;
    }

    Array.from(cell.children)
      .filter((child) => child.localName === 'p')
      .forEach((paragraph) => cell.removeChild(paragraph));

    const paragraphs = value.split(/\r?\n/);
    paragraphs.forEach((paragraphText) => {
      const paragraph = doc.createElementNS(WORD_NAMESPACE, 'w:p');
      const run = doc.createElementNS(WORD_NAMESPACE, 'w:r');
      const text = doc.createElementNS(WORD_NAMESPACE, 'w:t');
      text.setAttribute('xml:space', 'preserve');
      text.textContent = paragraphText;
      run.append(text);
      paragraph.append(run);
      cell.append(paragraph);
    });
  }

  private getCells(row: Element) {
    return Array.from(row.children).filter((child) => child.localName === 'tc');
  }

  private createZip(files: Array<{ path: string; data: Uint8Array }>) {
    const encoder = new TextEncoder();
    const localParts: Uint8Array[] = [];
    const centralParts: Uint8Array[] = [];
    let offset = 0;

    files.forEach((file) => {
      const name = encoder.encode(file.path);
      const crc = this.crc32(file.data);
      const local = new Uint8Array(30 + name.length);
      const localView = new DataView(local.buffer);
      localView.setUint32(0, 0x04034b50, true);
      localView.setUint16(4, 20, true);
      localView.setUint16(8, 0, true);
      localView.setUint32(14, crc, true);
      localView.setUint32(18, file.data.length, true);
      localView.setUint32(22, file.data.length, true);
      localView.setUint16(26, name.length, true);
      local.set(name, 30);
      localParts.push(local, file.data);

      const central = new Uint8Array(46 + name.length);
      const centralView = new DataView(central.buffer);
      centralView.setUint32(0, 0x02014b50, true);
      centralView.setUint16(4, 20, true);
      centralView.setUint16(6, 20, true);
      centralView.setUint16(10, 0, true);
      centralView.setUint32(16, crc, true);
      centralView.setUint32(20, file.data.length, true);
      centralView.setUint32(24, file.data.length, true);
      centralView.setUint16(28, name.length, true);
      centralView.setUint32(42, offset, true);
      central.set(name, 46);
      centralParts.push(central);

      offset += local.length + file.data.length;
    });

    const centralOffset = offset;
    const centralSize = centralParts.reduce((size, part) => size + part.length, 0);
    const end = new Uint8Array(22);
    const endView = new DataView(end.buffer);
    endView.setUint32(0, 0x06054b50, true);
    endView.setUint16(8, files.length, true);
    endView.setUint16(10, files.length, true);
    endView.setUint32(12, centralSize, true);
    endView.setUint32(16, centralOffset, true);

    return new Blob([...localParts, ...centralParts, end]);
  }

  private crc32(data: Uint8Array) {
    let crc = 0xffffffff;

    for (const byte of data) {
      crc ^= byte;
      for (let bit = 0; bit < 8; bit += 1) {
        crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1));
      }
    }

    return (crc ^ 0xffffffff) >>> 0;
  }

  private renderEntry(entry: JobEntry, index: number) {
    return html`
      <section class="panel">
        <div class="entry-head">
          <h2 class="entry-title">Job ${index + 1}</h2>
          <button class="danger" type="button" @click=${() => this.removeEntry(entry.id)}>Remove</button>
        </div>

        <div class="entry-grid">
          <label class="span-2">
            Date
            <input
              type="date"
              .value=${entry.date}
              @input=${(event: InputEvent) => this.updateEntry(entry.id, 'date', (event.target as HTMLInputElement).value)}
            >
          </label>

          <label class="span-4">
            Employer Name
            <input
              .value=${entry.employer}
              @input=${(event: InputEvent) => this.updateEntry(entry.id, 'employer', (event.target as HTMLInputElement).value)}
            >
          </label>

          <label class="span-6">
            Address
            <input
              .value=${entry.address}
              @input=${(event: InputEvent) => this.updateEntry(entry.id, 'address', (event.target as HTMLInputElement).value)}
            >
          </label>

          <label class="span-3">
            Contact By
            <select
              .value=${entry.contactBy}
              @change=${(event: Event) => this.updateEntry(entry.id, 'contactBy', (event.target as HTMLSelectElement).value)}
            >
              <option>Online</option>
              <option>Email</option>
              <option>Phone</option>
              <option>In person</option>
              <option>Website</option>
              <option>Other</option>
            </select>
          </label>

          <label class="span-3">
            Name of Contact
            <input
              .value=${entry.contactName}
              @input=${(event: InputEvent) => this.updateEntry(entry.id, 'contactName', (event.target as HTMLInputElement).value)}
            >
          </label>

          <label class="span-3">
            Position Sought
            <input
              .value=${entry.position}
              @input=${(event: InputEvent) => this.updateEntry(entry.id, 'position', (event.target as HTMLInputElement).value)}
            >
          </label>

          <label class="span-3">
            Application/Resume submitted?
            <select
              .value=${entry.submitted}
              @change=${(event: Event) => this.updateEntry(entry.id, 'submitted', (event.target as HTMLSelectElement).value)}
            >
              <option>Yes</option>
              <option>No</option>
              <option>Online</option>
              <option>Email</option>
              <option>In person</option>
            </select>
          </label>

          <label class="span-12">
            Results
            <textarea
              .value=${entry.results}
              @input=${(event: InputEvent) => this.updateEntry(entry.id, 'results', (event.target as HTMLTextAreaElement).value)}
            ></textarea>
          </label>
        </div>
      </section>
    `;
  }

  override render() {
    return html`
      <main>
        <section class="topbar">
          <div>
            <h1>Job Search Log</h1>
            <p class="subtitle">
              Enter each job application once, download the completed document, then attach it to your employment email.
            </p>
          </div>
          <div class="actions">
            <button type="button" @click=${this.addEntry}>Add Job</button>
            <button class="primary" type="button" @click=${this.downloadDocument}>Download Document</button>
            <a class="email-link primary" href=${this.emailHref()}>Email Employment</a>
          </div>
        </section>

        <section class="panel">
          <div class="profile-grid">
            <label>
              Name
              <input
                .value=${this.profile.name}
                @input=${(event: InputEvent) => this.updateProfile('name', (event.target as HTMLInputElement).value)}
              >
            </label>
            <label>
              Claim Number
              <input
                .value=${this.profile.claimNumber}
                @input=${(event: InputEvent) => this.updateProfile('claimNumber', (event.target as HTMLInputElement).value)}
              >
            </label>
            <label>
              Employment Email
              <input
                type="email"
                .value=${this.profile.emailTo}
                @input=${(event: InputEvent) => this.updateProfile('emailTo', (event.target as HTMLInputElement).value)}
              >
            </label>
          </div>
          <p class="status">${this.status}</p>
          <p class="muted">
            The email button opens your mail app. Browsers cannot attach files automatically, so download the document first and attach it to that email.
          </p>
        </section>

        ${this.entries.map((entry, index) => this.renderEntry(entry, index))}

        <section class="panel">
          <div class="entry-head">
            <h2 class="entry-title">Document Preview</h2>
            <button type="button" @click=${this.addEntry}>Add Another Job</button>
          </div>
          <div class="preview-wrap">
            <table>
              <thead>
                <tr>
                  <th>Date<br><span>(month/day/year)</span></th>
                  <th>Employer Name<br>Address</th>
                  <th>Contact By<br><span>(email, phone, etc.)</span></th>
                  <th>Name of Contact</th>
                  <th>Position Sought</th>
                  <th>Results</th>
                  <th>Application/Resume submitted?</th>
                </tr>
              </thead>
              <tbody>
                ${this.entries.map((entry) => html`
                  <tr>
                    <td>${this.formatDate(entry.date)}</td>
                    <td><strong>${entry.employer}</strong><br>${entry.address}</td>
                    <td>${entry.contactBy}</td>
                    <td>${entry.contactName}</td>
                    <td>${entry.position}</td>
                    <td>${entry.results}</td>
                    <td>${entry.submitted}</td>
                  </tr>
                `)}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    `;
  }
}
