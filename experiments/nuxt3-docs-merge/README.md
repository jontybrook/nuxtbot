# Nuxt 3 Docs Merge

In order for NuxtBot to be useful, it needs up-to-date knowledge of Nuxt and it's features. Early models (eg gpt-3) don't even know Nuxt 3 has been released, due to their years-old knowledge cutoff.

The [Nuxt 3 documentation](https://nuxt.com/docs) is conveniently written in Markdown (the Nuxt site uses [Nuxt Content](https://content.nuxt.com/) to render this). However, OpenAI's GPT builder / assistants API only accepts up to 20 documents for retrieval, so this experiment simply merges the Nuxt 3 docs into a single Markdown file which can then be used for retrieval.

For now i've manually copied the latest documentation (as of [this commit](https://github.com/nuxt/nuxt/commit/c1ddb359e38d750b7a8bc47f3ae62677c04aaf28) at the time of writing) and merged using the included script. The resulting single document can be used for retrieval, such as with Open AI GPT.

## Roadmap 

- In the long-term, the aim could be to automatically re-generate this 'AI-friendly' documentation whenever the Nuxt docs are updated. 
- This could be done by using the [Nuxt Content API](https://content.nuxtjs.org/advanced#api) to retrieve the latest docs, and then merging them into a single file.
- Expand this merging of documentation to ecosystem projects.