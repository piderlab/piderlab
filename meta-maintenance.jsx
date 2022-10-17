export const layout = "layouts/main.jsx";

// ページのタイトル
export const title = "🔨meta-maintenance";
// ページの説明
export const description = "meta-maintenanceについての研究。";

export default (data) => (
  <div class="h-full flex flex-col">
    <header class="p-4 border-t-5 border-blue-500/50">
      <h1 class="text-3xl">{data.title}</h1>
    </header>
    <main class="flex-grow p-4 bg-gray-100 shadow-inner">
      <section class="bg-white shadow-lg rounded-sm">
        <h2 class="text-2xl p-2 m-2 border-b-2">meta-maintenance</h2>
        <p class="p-2 m-2">meta-maintenanceのページ</p>
      </section>
    </main>
    <footer class="p-4">
      <ul class="pl-8">
        <li class="list-disc">
          GitHub：
          <a
            href="https://github.com/piderlab"
            class="break-all text-blue-600 hover:underline"
          >
            https://github.com/piderlab
          </a>
        </li>
        <li class="list-disc">
          source code for this page：
          <a
            href="https://github.com/piderlab/piderlab.github.io"
            class="break-all text-blue-600 hover:underline"
          >
            https://github.com/piderlab/piderlab.github.io
          </a>
        </li>
      </ul>
    </footer>
  </div>
);
