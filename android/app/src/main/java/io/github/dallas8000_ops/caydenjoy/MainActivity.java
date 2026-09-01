package io.github.dallas8000_ops.caydenjoy;

import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;

import com.getcapacitor.BridgeActivity;

import java.util.Locale;

public class MainActivity extends BridgeActivity {
    private CaydenJoyVoiceBridge voiceBridge;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        voiceBridge = new CaydenJoyVoiceBridge();
        getBridge().getWebView().addJavascriptInterface(voiceBridge, "CaydenJoyVoice");
    }

    @Override
    public void onDestroy() {
        if (voiceBridge != null) {
            voiceBridge.shutdown();
        }
        super.onDestroy();
    }

    private final class CaydenJoyVoiceBridge {
        private TextToSpeech textToSpeech;
        private boolean ready = false;
        private String pendingText;
        private float pendingRate = 0.9f;

        CaydenJoyVoiceBridge() {
            textToSpeech = new TextToSpeech(MainActivity.this, status -> {
                if (status == TextToSpeech.SUCCESS && textToSpeech != null) {
                    int languageStatus = textToSpeech.setLanguage(Locale.US);
                    if (languageStatus == TextToSpeech.LANG_MISSING_DATA || languageStatus == TextToSpeech.LANG_NOT_SUPPORTED) {
                        textToSpeech.setLanguage(Locale.getDefault());
                    }
                    ready = true;
                    flushPendingSpeech();
                }
            });
        }

        @JavascriptInterface
        public void speak(String text, float rate) {
            if (text == null || text.trim().isEmpty()) {
                return;
            }

            runOnUiThread(() -> {
                pendingText = text;
                pendingRate = Math.max(0.5f, Math.min(rate, 1.5f));
                flushPendingSpeech();
            });
        }

        private void flushPendingSpeech() {
            if (!ready || textToSpeech == null || pendingText == null) {
                return;
            }

            String text = pendingText;
            float rate = pendingRate;
            pendingText = null;
            textToSpeech.stop();
            textToSpeech.setSpeechRate(rate);
            textToSpeech.speak(text, TextToSpeech.QUEUE_FLUSH, null, "caydenjoy-voice");
        }

        void shutdown() {
            if (textToSpeech != null) {
                textToSpeech.stop();
                textToSpeech.shutdown();
            }
        }
    }
}
