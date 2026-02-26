# Color Nexus

Color Nexus là game nối màu được xây dựng bằng **React Native + Expo Router**.
Mục tiêu của người chơi là nối các cặp điểm cùng màu, lấp đầy toàn bộ bàn chơi hợp lệ và hoàn thành chuỗi level trong giới hạn thời gian.

## Tính năng chính

- Nối các cặp điểm cùng màu theo cơ chế kéo (gesture).
- Nhiều nhóm level theo kích thước và độ khó: `3x3` → `6x6`, có biến thể block.
- Hệ thống tính điểm, high score và timer theo phiên chơi.
- Đa ngôn ngữ Việt/Anh (i18n).
- Âm thanh game (SFX + BGM), có thể bật/tắt trong Settings.
- Các màn hình phụ: How to Play, Info, Privacy, Settings.

## Công nghệ sử dụng

- **Expo SDK 54**
- **React Native 0.81**
- **Expo Router** (file-based routing)
- **TypeScript**
- **react-native-gesture-handler** (xử lý vuốt/kéo trong grid)
- **AsyncStorage** (lưu high score, sound setting)

## Cấu trúc thư mục

```text
app/
  _layout.tsx       # Root layout, providers, stack navigation
  index.tsx         # Home screen
  game.tsx          # Gameplay screen
  settings.tsx      # Cài đặt
  how-to-play.tsx   # Hướng dẫn chơi
  info.tsx          # Thông tin app
  privacy.tsx       # Chính sách bảo mật

src/
  components/
    Grid.tsx
    grid/
      useGridLogic.ts   # Core gameplay logic cho grid
      GridCell.tsx
      GridLines.tsx
      gridHelpers.ts
  levels/
    levels.ts           # Tập hợp level + shuffle
    level_*.ts          # Dữ liệu level theo kích thước/biến thể
    types.ts
  i18n/
    I18nContext.tsx
    translations.ts
  utils/
    sound.ts            # Load/play/unload sound, sound setting
  styles/
    *.styles.ts
```

## Luồng gameplay chính

1. Người chơi vào `app/game.tsx`.
2. Màn chơi hiện tại lấy từ `src/levels/levels.ts`.
3. Grid render từ `src/components/Grid.tsx`.
4. Tương tác kéo/vuốt được xử lý bởi `useGridLogic`:
   - Bắt đầu đường nối từ endpoint.
   - Chỉ cho phép đi ô kề hợp lệ.
   - Kiểm tra điều kiện hoàn thành level (đủ màu, phủ ô chơi hợp lệ, xử lý connector nếu có).
5. Khi thắng level:
   - Tăng điểm.
   - Cập nhật high score nếu cần.
   - Chuyển sang level kế tiếp hoặc hiển thị completed modal.

## Cài đặt & chạy dự án

### 1) Cài dependencies

```bash
npm install
```

### 2) Chạy app

```bash
npm run start
```

### 3) Chạy theo nền tảng

```bash
npm run android
npm run ios
npm run web
```

### 4) Lint

```bash
npm run lint
```

## Cách thêm level mới

1. Mở file level tương ứng trong `src/levels/` (ví dụ `level_5x5.ts`).
2. Thêm một object `LevelData` mới:
   - `size`: kích thước bàn.
   - `endpoints`: danh sách điểm đầu/cuối theo `index` + `color`.
   - `blocked` (optional): ô bị chặn.
   - `connectors` (optional): ô connector cần đi qua theo rule hiện tại.
3. Đảm bảo file `src/levels/levels.ts` đã import và spread mảng level đó.
4. Chạy app để test bằng tay level mới.

## i18n (Việt/Anh)

- Nội dung text nằm tại `src/i18n/translations.ts`.
- Context và state ngôn ngữ nằm tại `src/i18n/I18nContext.tsx`.
- UI dùng hook `useI18n()` để đọc `t.<namespace>.<key>`.

## Âm thanh

- Sound system nằm tại `src/utils/sound.ts`.
- Sound được khởi tạo trong `SoundProvider` (`app/_layout.tsx`).
- Có các hàm chính:
  - `loadSounds`, `unloadSounds`
  - `playSwipe`, `playConnect`, `playWin`
  - `setSoundEnabled`, `isSoundEnabled`

## Scripts có sẵn

- `npm run start` – chạy Expo dev server.
- `npm run android` – mở Android target.
- `npm run ios` – mở iOS target.
- `npm run web` – chạy bản web.
- `npm run lint` – kiểm tra lint theo cấu hình Expo ESLint.

## Gợi ý roadmap cải tiến

- Persist language setting bằng AsyncStorage.
- Thêm unit test cho core logic trong `useGridLogic`.
- Hoàn thiện CTA chưa có hành động thực tế (Rate app, social links).
- Cải thiện analytics gameplay (thời gian hoàn thành level, tỉ lệ retry).

---

Nếu bạn muốn, mình có thể viết tiếp một bản **CONTRIBUTING.md** ngắn cho quy trình thêm level và quy ước màu/index để team làm nội dung nhanh hơn.
