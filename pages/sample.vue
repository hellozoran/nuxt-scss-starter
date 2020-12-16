<template lang="html">
  <div class="page">
    <Container>
      <Heading :level="1">
        {{ $t('welcome') }}
      </Heading>
      <form @submit.prevent="submitForm">
        <FormField>
          <label>Name</label>
          <input type="text" v-model="name" class="focus:ring-2 focus:ring-indigo-800" />
          <span v-if="!$v.name.required && $v.name.$dirty" class="text-red-700">Name is required</span>
          <span v-if="!$v.name.alpha && $v.name.$dirty" class="text-red-700">Alpha name is required</span>
        </FormField>
        <FormField>
          <label>Email</label>
          <input type="email" v-model="email" />
          <span v-if="(!$v.email.required || !$v.email.email) && $v.email.$dirty" class="text-red-700">Email is required</span>
        </FormField>
        <FormField>
          <label>Password</label>
          <input type="password" v-model="password" />
          <span v-if="!$v.password.required && $v.password.$dirty" class="text-red-700">Password is required</span>
        </FormField>
        <FormField>
          <div class="flex items-center flex-row">
            <ToggleInput :value="acceptTerms" @toggled="acceptTerms = !acceptTerms" class="mr-2" />
            <label>Accept terms</label>
          </div>
          <span v-if="!$v.acceptTerms.required && $v.acceptTerms.$dirty">Required checkbox validation message</span>
        </FormField>
        <Btn @click="submitForm">
          Send away
        </Btn>
      </form>
    </Container>
  </div>
</template>

<script>
import { required, alpha, email, sameAs } from 'vuelidate/lib/validators'
import pageMetadata from '~/mixins/pageMetadata'

export default {
  mixins: [pageMetadata],
  data() {
    return {
      name: '',
      email: '',
      password: '',
      acceptTerms: '',
      meta: {
        title: 'Nuxt project starter',
        description: 'Sample meta description',
        sharecard: 'https://sharecard.com/image.jpg',
        url: this.$route.path
      }
    }
  },
  validations: {
    name: {
      required,
      alpha
    },
    email: {
      required,
      email
    },
    password: {
      required
    },
    acceptTerms: {
      required,
      sameAs: sameAs(() => true)
    }
  },
  methods: {
    submitForm() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        console.log(`name: ${this.name}, email: ${this.email}, password: ${this.password}, acceptTerms: ${this.acceptTerms}`)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  @apply mx-auto py-8;
}
</style>