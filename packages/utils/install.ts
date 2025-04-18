import type { App,  Plugin} from 'vue'
import { each } from "lodash-es";

type SFCWithInstall<T> = T & Plugin & {
  name: any
}

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, (c) => app.use(c))

  return installer as Plugin
}

export function withInstall<T>(component: T) {
  (component as SFCWithInstall<T>).install = (appendFile: App) => {
    const name = (component as any).name
    appendFile.component(name,  component as Plugin)
  }

  return component as Plugin
}