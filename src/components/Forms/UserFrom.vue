<template>
  <UserProvider>
    <FormFactory :fields="fields" :id="id"/>
  </UserProvider>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import UserProviderVue from '@/mixins/UserProvider.vue';

import FormFactory from './FormFactory.vue';
import FormInput from '../FormElements/FormInput.vue';

export default {
  name: 'UserForm',
  components: {
    FormFactory,
    UserProvider: UserProviderVue,
  },
  props: {
    // Passing an ID as a property makes
    // the form load an existing user and
    // switches the form into editing mode.
    id: {
      default: null,
      type: [Number, String],
    },
  },
  created() {
    this.fields = [
      {
        component: FormInput,
        label: 'Name',
        name: 'name',
        options: {
          attrs: {
            placeholder: 'Your name',
          },
        },
        validation: {
          required,
        },
      },
    ];
  },
};
</script>
