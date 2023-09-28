# Summary - React Testing

## 1. Testing

Testing adalah proses _memverifikasi_ bahwa test assertions kita benar dan bahwa code kita tetap benar sepanjang masa aplikasi. _Test assertion_ ini adalah _ekspresi boolean_ yang mengembalikan nilai true kecuali ada bug di kode kita.

**Manfaat Testing**

- Ketika aplikasi kita mempunyai coverage yang baik (mayoritas codebase tercover oleh test), Kita akan merasa percaya diri jika harus mengubah suatu bagian pada aplikasi kita. Saat kita mengubah bagian tersebut, dan ada bagian yang lain menjadi broken kita akan segera mengetahuinya.
- Mengurangi bug pada aplikasi. Walaupun testing tidak menjamin aplikasi kita bebas bug, tetapi kita bisa mencegah beberapa hal yang berpotensi menjadi bug.

**Kategori Testing**

1. _Rendering component trees_ di dalam environment tes yang
   sudah disederhanakan dan ditegaskan pada keluarannya. Kita akan fokus
   pada bagian ini.
2. _Menjalankan aplikasi lengkap_ di dalam environment peramban
   (browser) asli. Ini dikenal sebagai tes “end-to-end”.

**Tools yang direkomendasikan**

- Jest
  Test runner pada JavaScript yang memungkinkan Anda mengakses DOM melalui jsdom. Sementara jsdom hanyalah perkiraan cara kerja browser, seringkali cukup baik mengetes komponen pada React. Jest memberikan kecepatan iterasi yang bagus dikombinasikan dengan fitur-fitur yang powerful seperti mockingmodules dantimers sehingga Anda dapat memiliki kontrol lebih pada kode yang dijalankan.
- RTL (React Testing Liberary)
  Merupakan seperangkat helpers yang memungkinkan kita mengetes komponen pada React tanpa bergantung pada detail implementasinya. Pendekatan ini membuat refactoring menjadi mudah dan juga mendorong kita untuk menerapkan best practices untuk aksesibilitas. Mungkin tidak memberikan cara untuk me-render secara “dangkal” pada sebuah komponen tanpa anak, test runner seperti Jest yang memungkinkan kita melakukan mocking.

## 2. Rendering Komponen

**Rendering & Debug**
Fungsi render RTL akan merender file JSX apa pun yang dibutuhkan. Setelah itu, kita baru bisa memiliki akses ke komponen React yang akan kita test. Untuk meyakinkan bahwa file JSX sudah terender, kita bisa menggunakan fungsi debug RTL. Selalu gunakan fungsi debug RTL apabila kita tidak yakin seperti apa
hasil dari fungsi render RTL.

React Testing Library digunakan untuk berinteraksi dengan komponen kita seperti manusia. Itulah alasan kenapa kita melihat struktur HTML sebagai output dari fungsi render.

**Memilih Elemen**
React Testing Library menawarkan berbagai fungsi untuk mendapatkan elemen. Element selanjutnya digunakan untuk assertions atau untuk interaksi pengguna. Kita dapat memilih elemen dengan fungsi object screen RTL. Salah satu contohnya ialah getByText untuk memilih teks dari elemen yang sudah dipilih. Contoh lain yang bisa digunakan.

- getByLabelText
- getByPlaceholderText
- getByAltText
- getByDisplayValue

## 3. Testing Custom Hook

Library yang digunakan untuk mengetes custom hook, kita menggunakan _React Hooks Testing Library._ Dia akan memberikan kita alat alat untuk mengetes hooks tanpa merender satu komponen.

Installasi

```sh
npm install -D @testing-library/react-hook
```

Dokumentasi lebih jelas ada di https://react-hooks-testing-library.com/
