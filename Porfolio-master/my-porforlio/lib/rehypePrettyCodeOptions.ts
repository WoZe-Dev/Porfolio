import { Options } from 'rehype-pretty-code'

const rehypePrettyCodeOptions: Partial<Options> = {
  theme: {
    dark: 'github-dark',
    light: 'github-light',
  },
  keepBackground: true,
}

export default rehypePrettyCodeOptions
