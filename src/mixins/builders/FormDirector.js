import { required } from 'vuelidate/lib/validators';
import UserProvider from '@/mixins/UserProvider.vue';
import FormInput from '@/components/FormElements/FormInput.vue';

export default class FormDirector {
  constructor(builder) {
    this.builder = builder;
  }

  makeUserForm() {
    return this.builder
      .withProvider(UserProvider)
      .addField([{
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
      }])
      .build();
  }
}
