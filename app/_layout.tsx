import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SoundProvider } from "../src/context/SoundContext";
import { I18nProvider } from "../src/i18n/I18nContext";
export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SoundProvider>
        <I18nProvider>
          <Stack screenOptions={{ headerShown: false }} />
        </I18nProvider>
      </SoundProvider>
    </GestureHandlerRootView>
  );
}
