<template>
  <div class="card">
    <div class="card-header card-header-default">
      <h4 class="card-title ">利用ログ一覧</h4>
      <p class="card-category">ユーザーが本サイトを閲覧、利用した履歴の一覧です。</p>
    </div>
    <div class="card-body">
      <div class="limit-contents">
        <table class="table">
          <thead class=" text-info">
            <tr>
              <th>日時</th>
              <th>利用者</th>
              <th>レベル</th>
              <th>内容</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2018-06-01 12:45:00</td>
              <td>ユーザー(157.12.16.150)</td>
              <td>エラー</td>
              <td>API-ID:0adfwjf98-7786 は現在無効になっているため応答できません。</td>
            </tr>
            <tr>
              <td>2018-06-01 12:45:00</td>
              <td>テスト太郎</td>
              <td>エラー</td>
              <td>コーパスID:0teg38aq は検証用の教師データが登録されていないため検証できません。</td>
            </tr>
            <tr>
              <td>2018-06-01 12:15:00</td>
              <td>テスト太郎</td>
              <td>警告</td>
              <td>コーパスID:0teg38aq が作成されましたが、教師データが登録されていません。</td>
            </tr>
            <tr>
              <td>2018-06-01 12:00:00</td>
              <td>テスト太郎</td>
              <td>情報</td>
              <td>ログインしました。[GET / HTTP/1.1 Chrome/66.0.3359.181 10.171.2.123:38981]</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import * as Core from '../../../../common/core/app';
// import * as Ajax from '../../../../common/core/ajax';
// import { mapGetters } from 'vuex';

export default {
  components: {},
  props: [],
  data() {
    return {
    };
  },
  computed: {
    // ...mapGetters({
    // }),
  },
  crated() {
    Core.log('[crated]');
  },
  mounted() {
    Core.log('[mounted]');
  },
  methods: {
  },
};
</script>

<style></style>