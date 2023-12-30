import { build } from "esbuild";
import { esbuildDecorators } from "@anatine/esbuild-decorators";

const cwd = process.cwd();

build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  sourcemap: true,
  outfile: "public/dist/index.js",
  format: "esm",
  plugins: [
    esbuildDecorators({
      tsconfig: "tsconfig.json",
      cwd,
    }),
  ],
}).catch((e) => {
  console.error(e);
  process.exit(1);
});
