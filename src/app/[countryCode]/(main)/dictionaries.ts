//@ts-nocheck
import "server-only"

const dictionaries = {
  en: () =>
    import("./dictionaries/en/common.json").then((module) => module.default),
  fr: () =>
    import("./dictionaries/fr/common.json").then((module) => module.default),
  es: () =>
    import("./dictionaries/es/common.json").then((module) => module.default),
  pl: () =>
    import("./dictionaries/pl/common.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => dictionaries[locale]()
