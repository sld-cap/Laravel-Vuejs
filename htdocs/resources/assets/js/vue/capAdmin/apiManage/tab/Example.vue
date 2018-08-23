<template>
  <div class="highlight">
    <h5 class="bold text-default">リクエストサンプル</h5>
    <div>
      以下のフォーマットにて、審査リクエストを送る必要があります。<br />
      認証トークンは「認証情報」タブにてご確認ください。
    </div>
    <p>※注意：審査するテキストは1024文字以内です。上限を超えた場合、下記のエラーコードがレスポンスされます。</p>
    <pre class="doc-content"><code><span class="bold">GET</span> /api/exec/{api_id}</code></pre>
    <p>リクエスト例）</p>
    <pre class="doc-content"><code>curl -G 
-H <span class="bold">"X-Pasonatech-Cap-Token:0123abcd"</span> <span style="color:green;"> //<- 認証トークンはHTTPリクエストのヘッダに必ず付加してください。</span>
--data-urlencode "text=<span class="bold">今日は晴れです。</span>" "{{ displayApiTab.api_url }}<span class="bold">001abcd-cap-0000</span>"</code></pre>

    <h5 class="bold text-default">リクエストパラメータ</h5>
    <table class="parameter_table">
      <tr>
        <th class="table_title">パラメータ名</th>
        <th>型</th>
        <th>内容</th>
      </tr>
      <tr>
        <td>X-Pasonatech-Cap-Token</td>
        <td>文字列</td>
        <td>（※必須）API認証トークン</td>
      </tr>
      <tr>
        <td>text</td>
        <td>文字列</td>
        <td>（※必須）審査対象テキスト</td>
      </tr>
      <tr>
        <td>api_id</td>
        <td>文字列</td>
        <td>（※必須）API-ID</td>
      </tr>
    </table>

    <hr>
    <h5 class="bold text-default">レスポンスサンプル</h5>
    <div>レスポンスには、API-ID と 入力したテキスト 、 その審査結果が含まれています。</div>
    <span>リクエストがエラーになった場合は、以下のエラーレスポンスが返却されます。</span><br/><br />
    <p>レスポンス例）以下は「今日は晴れです。」という審査テキストに対して、登録済みの各クラス（天気、気温、日時）それぞれの確信度を取得しています。</p>
<pre class="doc-content"><code class="hljs json">
{
  <span class="hljs-attr">"api_id"</span> : <span class="hljs-string">"001abcd-cap-0000"</span>,
  <span class="hljs-attr">"url"</span>: <span class="hljs-string">"{{ displayApiTab.api_url }}001abcd-cap-0000"</span>,
  <span class="hljs-attr">"text"</span>: <span class="hljs-string">"今日は晴れです。"</span>,
  <span class="hljs-attr">"passed_classes"</span>: [
    <span class="hljs-string">"天気"</span>,
    <span class="hljs-string">"日時"</span>
  ],
  <span class="hljs-attr">"results"</span>: [
    {
      <span class="hljs-attr">"class_name"</span>: <span class="hljs-string">"天気"</span>,
      <span class="hljs-attr">"confidence"</span>: 0.95012345678912345,
      <span class="hljs-attr">"threshold"</span>: 0.8,
      <span class="hljs-attr">"result"</span>: 1
    },
    {
      <span class="hljs-attr">"class_name"</span>: <span class="hljs-string">"気温"</span>,
      <span class="hljs-attr">"confidence"</span>: 0.05987654321987654,
      <span class="hljs-attr">"threshold"</span>: 0.8,
      <span class="hljs-attr">"result"</span>: 0
    },
    {
      <span class="hljs-attr">"class_name"</span>: <span class="hljs-string">"日時"</span>,
      <span class="hljs-attr">"confidence"</span>: 0.8596534321983653,
      <span class="hljs-attr">"threshold"</span>: 0.8,
      <span class="hljs-attr">"result"</span>: 1
    }
  ]
}
</code></pre>
    <h5 class="bold text-default">レスポンスパラメータ</h5>
    <table class="parameter_table">
      <tr>
        <th class="table_title">パラメータ名</th>
        <th>型</th>
        <th>内容</th>
      </tr>
      <tr>
        <td>text</td>
        <td>文字列</td>
        <td>リクエストされた審査対象テキスト</td>
      </tr>
      <tr>
        <td>passed_classes</td>
        <td>配列</td>
        <td>審査結果の確信度が閾値以上になったクラス（※閾値未設定の場合は最大確信度のクラスを返します。）</td>
      </tr>
      <tr>
        <td>results</td>
        <td>配列</td>
        <td>審査結果の詳細（全クラスの結果を格納）</td>
      </tr>
      <tr>
        <td>class_name</td>
        <td>文字列</td>
        <td>クラス名</td>
      </tr>
      <tr>
        <td>confidence</td>
        <td>数値</td>
        <td>AIの審査確信度（0〜1の数値）</td>
      </tr>
      <tr>
        <td>threshold</td>
        <td>数値</td>
        <td>確信度閾値（0〜1の数値）</td>
      </tr>
      <tr>
        <td>result</td>
        <td>数値</td>
        <td>確信度が閾値以上の場合は1、閾値未満の場合は0 を返却</td>
      </tr>
    </table>

    <h5 class="bold text-default">エラーレスポンス一覧</h5>
    <table class="parameter_table">
      <tr>
        <th class="table_title">HTTPコード</th>
        <th>メッセージ</th>
        <th>説明</th>
      </tr>
      <tr>
        <td>400</td>
        <td>Bad request</td>
        <td>APIに紐づくコーパスに問題があるか、審査対象のテキストに不備がある可能性があります。</td>
      </tr>
      <tr>
        <td>401</td>
        <td>Unauthorized</td>
        <td>API認証に失敗しています。認証トークンに不備がある可能性があります。</td>
      </tr>
      <tr>
        <td>404</td>
        <td>Not found</td>
        <td>指定されたAPI-IDが存在していません。API-IDの指定に不備がある可能性があります。</td>
      </tr>
    </table>
  </div>
</template>

<script>
import * as Core from '../../../../common/core/app';
// import * as Ajax from '../../../../common/core/ajax';

import { mapGetters } from 'vuex';

export default {
  components: {
  },
  props: [],
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
        displayApiTab: 'apiData/displayApiTab',
    }),
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