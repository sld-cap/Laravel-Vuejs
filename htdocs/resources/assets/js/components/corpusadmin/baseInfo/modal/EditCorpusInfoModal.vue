<template>
  <CommonModal v-if="this.showModal" @close="closeModal">
    <div slot="title">コーパスの編集</div>
    <!-- /.title -->
    <div slot="body">
      <p>
        <small>コーパスを作成し教師データを学習することで、ユーザから入力されたクリエイティブの意図を分類し、結果をAPIとして提供できます。</small>
      </p>
      <!-- /message -->
      <div class="form-group">
        <label for="editCorpusName">コーパス名</label>
        <input type="text" name="name" class="form-control" id="editCorpusName" aria-describedby="nameHelp" required>
        <small id="nameHelp" class="form-text text-muted">10字程度の識別しやすい名前を記入してください。</small>
        <div class="invalid-feedback">
          コーパス名を入力してください
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label for="editDescription">説明文</label>
        <textarea name="description" class="form-control" id="editDescription" rows="3" required></textarea>
        <!-- <small class="form-text text-muted">1000文字以内で入力してください。</small> -->
        <div class="invalid-feedback">
          説明文を入力してください
        </div>
      </div>
      <!-- /.form-group -->
      <div class="form-group">
        <label for="selectClass">言語</label>
        <select name="language" class="form-control form-control-sm" id="selectClass">
          <template v-for="(language, i) in corpusLanguageList" >
            <option :value="i" :key="i">{{ language.label }}</option>
          </template>
        </select>
      </div>
      <!-- /.form-group -->
    </div>
    <!-- /.body -->
    <div slot="footer">
      <button type="submit" class="btn btn-primary" id="add_content_btn">保存する</button>
    </div>
    <!-- /.footer -->
  </CommonModal>
</template>

<style>
</style>

<script>
import * as Core from '../../../../common/core/app';
import * as Ajax from '../../../../common/core/ajax';
import * as Lib from '../../../../common/ext/functions';
import ApiConfig from '../../../../common/core/apiConfig';
import CommonModal from '../../common/base/Modal.vue';

export default {
  props: [ 'editFormData', 'showModal' ],
  components: { CommonModal },
  data() {
    return {
      corpusLanguageList: Core.CorpusLanguage,
    };
  },
  computed: {
  },
  created() {
    Core.log('[created]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  updated() {
    Core.log('[updated]');
  },
  methods: {
  },
}
</script>