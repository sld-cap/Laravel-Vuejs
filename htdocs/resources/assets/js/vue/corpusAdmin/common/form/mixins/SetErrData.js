export default {
  methods: {
    setErrData(errors) {
      for(let index in errors) {
        const item = errors[index].field_id;
        if(item in this.err) {
          this.err[item]['invalid'] = ' is-invalid';
          this.err[item]['message'] = errors[index].message;
        }
      }
    },
  },
};
