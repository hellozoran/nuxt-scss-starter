export default {
  head() {
    return {
      title: this.meta.title || '',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.meta.description || ''
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.meta.title || ''
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.meta.description || ''
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.meta.sharecard || ''
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: this.meta.url || ''
        },
        {
          hid: 'og:type',
          property: 'og:type',
          content: this.meta.type || 'website'
        },
        {
          hid: 'twitter:creator',
          property: 'twitter:creator',
          content: '@revolutionsrec2'
        },
        {
          hid: 'twitter:site',
          property: 'twitter:site',
          content: '@revolutionsrec2'
        },
        {
          hid: 'twitter:title',
          property: 'twitter:title',
          content: this.meta.title
        },
        {
          hid: 'twitter:description',
          property: 'twitter:description',
          content: this.meta.description
        },
        {
          hid: 'twitter:image:src',
          property: 'twitter:image:src',
          content: this.meta.sharecard || ''
        },
        {
          hid: 'twitter:card',
          property: 'twitter:card',
          content: 'summary'
        },
        {
          hid: 'twitter:domain',
          property: 'twitter:domain',
          content: 'revolutionsrecords.com'
        }
      ]
    }
  }
}