export const validationMixin = {
  methods: {
    validate(field) {
      if (this.validations[field]) {
        this.validations[field] = {
          ...this.validations[field],
          error: null,
        };
        if (
          this.validations[field].between &&
          (this.validations[field].between[0] >=
            this.formSchema[field].length ||
            this.validations[field].between[1] <= this.formSchema[field].length)
        ) {
          const min = this.validations[field].between[0];
          const max = this.validations[field].between[1];
          this.validations[field] = {
            ...this.validations[field],
            error: this.$t('invalidBetween', {
              min,
              max,
            }),
          };
        }
        if (
          this.validations[field].min &&
          this.formSchema[field].length <= this.validations[field].min
        ) {
          const min = this.validations[field].min;
          this.validations[field] = {
            ...this.validations[field],
            error: this.$t('invalidMin', { min }),
          };
        }
        if (
          this.validations[field].max &&
          this.formSchema[field].length >= this.validations[field].max
        ) {
          const max = this.validations[field].max;
          this.validations[field] = {
            ...this.validations[field],
            error: this.$t('invalidMax', { max }),
          };
        }
        if (this.validations[field].required && !this.formSchema[field]) {
          this.validations[field] = {
            ...this.validations[field],
            error: this.$t('required'),
          };
        }
        if (!this.validations[field].error) {
          this.validations[field] = {
            ...this.validations[field],
            valid: true,
          };
        }
      }
    },
  },
};
