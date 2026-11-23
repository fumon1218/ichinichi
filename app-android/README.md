# 이찌니찌 안드로이드 앱 (APK)

- main에 index.html 이 바뀌어 올라가면 GitHub Actions(.github/workflows/android.yml)가 Capacitor 8로 APK를 만듭니다.
- 받는 곳: https://github.com/fumon1218/ichinichi/releases/download/apk/ichinichi.apk (앱 설정 화면의 "안드로이드 앱(APK) 받기")
- 서명: sideload.keystore(별칭 androiddebugkey, 비밀번호 android)를 매번 같은 키로 써서 덮어 설치가 됩니다. 저장소 비밀값 APK_KEYSTORE_B64가 있으면 그 키를 씁니다.
- native.js: 앱 안에서만 동작 — 기기 음성(TextToSpeech) 연결, 오프라인 저장(서비스 워커) 끄기, 인쇄 안내.
