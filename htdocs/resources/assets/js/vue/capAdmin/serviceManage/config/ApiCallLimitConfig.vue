<template>
  <div class="card">
    <div class="card-header card-header-default">
      <h4 class="card-title">月間APIコール上限設定</h4>
      <p class="card-category"></p>
    </div>
    <div class="card-body">
      <div class="limit-contents">
        <table class="table setting-table">
          <thead class="text-info">
            <tr>
              <th>サービス</th>
              <th>上限回数</th>
              <th class="btnbox"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>APIコール回数</td>
              <td>10,000　回</td>
              <td>
                <button type="button" rel="tooltip" class="btn btn-success" onclick="location.href='/acount/edit/1'">
                  <i class="material-icons">edit</i>
                </button>
                <!-- Modal -->
                <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog" role="document">
                    <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">本当に削除してもよろしいですか？</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      実行すると当該アカウントのプロフィール情報は全て削除されます。
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">閉じる</button>
                      <button type="button" class="btn btn-primary">削除</button>
                    </div>
                    </div>
                  </div>
                </div>
              </td>
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