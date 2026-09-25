/**
 * Built-in board photos, bundled with the app.
 *
 * These used to be hotlinked from images.unsplash.com, which meant the default
 * cards were blank offline and every device contacted a third-party server.
 * They are now shipped in src/assets/photos (Unsplash License: free to use,
 * no attribution required) and resolved by Vite, so URLs respect the build
 * base (/CaydenJoy/ on GitHub Pages, ./ inside the Android app).
 *
 * grandad.svg and therapy.svg are original illustrations replacing two
 * Unsplash photos that had been deleted upstream (they returned 404, so those
 * cards were already showing as broken images).
 */
const files = import.meta.glob('../assets/photos/*.{jpg,svg}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function photo(id: string): string {
  const url = files[`../assets/photos/${id}.jpg`] ?? files[`../assets/photos/${id}.svg`];
  if (!url) {
    console.error(`[photos] missing bundled photo: ${id}`);
    return '';
  }
  return url;
}
