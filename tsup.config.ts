import { defineConfig } from "tsup";
import { workspaceRootSync } from "workspace-root";

const rootDirectory = workspaceRootSync();

export default defineConfig({
  entry: ["./src/index.ts"],
  banner: {
    js: "/* Furlab API Proxy Package Developed by Vedla */",
  },
  clean: true,
  format: ["cjs", "esm", "iife"],
  outDir: `./dist`,

  splitting: false,
  // minify: "terser",
  // noExternal: [],
  // external: ["*"],
  sourcemap: true,
  dts: true,

  // watch: ['src', './src/**/*.ts',  './src/**/*.js'],
});
