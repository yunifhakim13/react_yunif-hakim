import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return {
    plugins: [react()],
    test: {},
    define: {
      "process.env.REACT_APP_OPENAI": JSON.stringify(env.REACT_API_KEY),
    },
  };
});
