<template lang="html">
  <div class="page">
    <Container>
      <Heading :level="1" class="mb-8">
        {{ $t('ui_elements') }}
      </Heading>
      <Flex>
        <div class="md:w-1/2">
          <Accordion class="mb-4">
            <template #title>
              <span>
                Accordion item
              </span>
            </template>
            <template #content>
              <div>
                Content
              </div>
            </template>
          </Accordion>
        </div>
        <div class="md:w-1/2 py-2 px-4">
          <Dropdown title="Dropdown item">
            <div class="p-4">
              Item 1
            </div>
          </Dropdown>
        </div>
      </Flex>
    </Container>
  </div>
</template>

<script>
import pageMetadata from '~/mixins/pageMetadata'

export default {
  mixins: [pageMetadata],
  computed: {
    meta() {
      return {
        title: '',
        description: '',
        url: '',
        sharecard: ''
      }
    }
  }
}
</script>