import { makeInstaller } from "@zx-design/utils";
import components from "./components.ts";

const installer = makeInstaller(components)

export * from '@zx-design/components'

export default installer