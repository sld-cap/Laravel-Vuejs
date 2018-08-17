<template>
  <CommonModal>
    <div slot="title">コーパスの作成</div>
    <!-- /.title -->
    <div slot="body">
      コンテンツ
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button type="button" class="btn btn-primary">アクション</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import ApiConfig from '../../../../common/core/apiConfig';
import CommonModal from '../../common/modal/Modal';

import { mapGetters } from 'vuex';
import MultiModalMixin from '../../common/modal/mixins/MultiModalMixin';

export default {
  name: '',
  mixins: [MultiModalMixin],
  components: { CommonModal },
  props: [],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
    }),
  },
  mounted() {
    this.initRender();
  },
  methods: {
  },
};
</script>