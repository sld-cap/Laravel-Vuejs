/**
 * component
 */
import LoginVue from '../../vue/login/Main.vue';
// CAP管理画面
import CapadminVue from '../../vue/capAdmin/index.vue';
import DashboardVue from '../../vue/capAdmin/dashboard/Main.vue';
import CorpusManageVue from '../../vue/capAdmin/corpusManage/Main.vue';
import ApiManageVue from '../../vue/capAdmin/apiManage/Main.vue';
import ServieManageVue from '../../vue/capAdmin/serviceManage/Main.vue';
import HelpVue from '../../vue/capAdmin/help/Main.vue';

// コーパス管理画面
import CorpusadminVue from '../../vue/corpusAdmin/index.vue';
import CorpusadminBaseInfoVue from '../../vue/corpusAdmin/baseInfo/Main.vue';
import CorpusadminDataManageVue from '../../vue/corpusAdmin/dataManage/Main.vue';
import CorpusadminTrainingManageVue from '../../vue/corpusAdmin/trainingManage/Main.vue';


/**
 * router config
 */
const routes = [
  /**
   * ログイン画面
   */
  {
    path: '/login',
    component: LoginVue,
  },
  /**
   * CAP管理画面
   */
  {
    path: '/',
    component: CapadminVue,
    meta: { requiresAuth: true },
    children: [
      {
        name: 'dashboard',
        path: '/',
        component: DashboardVue,
        meta: {
          breadcrumbe: [
            {
              label: 'TOP',
              name: '',
            },
          ],
        },
      },
      {
        name: 'corpusManage',
        path: '/corpus',
        component: CorpusManageVue,
        meta: {
          breadcrumbe: [
            {
              label: 'TOP',
              name: 'dashboard',
            },
            {
              label: 'コーパス管理',
              name: '',
            },
          ],
        },
      },
      {
        name: 'apiManage',
        path: '/api-info',
        component: ApiManageVue,
        meta: {
          breadcrumbe: [
            {
              label: 'TOP',
              name: 'dashboard',
            },
            {
              label: 'API管理',
              name: '',
            },
          ],
        },
      },
      {
        name: 'serviveManage',
        path: '/setting',
        component: ServieManageVue,
        meta: {
          breadcrumbe: [
            {
              label: 'TOP',
              name: 'dashboard',
            },
            {
              label: 'サービス管理',
              name: '',
            },
          ],
        },
      },
      {
        name: 'help',
        path: '/help',
        component: HelpVue,
        meta: {
          breadcrumbe: [
            {
              label: 'TOP',
              name: 'dashboard',
            },
            {
              label: 'ヘルプ',
              name: '',
            },
          ],
        },
      },
    ],
  },
  /**
   * コーパス管理画面
   */
  {
    path: '/corpus/:corpusId',
    component: CorpusadminVue,
    meta: { requiresAuth: true },
    props: route => ({ corpusId: parseInt(route.params.corpusId, 10) }),
    children: [
      {
        name: 'base-info',
        path: 'data',
        component: CorpusadminBaseInfoVue,
      },
      {
        name: 'data-view',
        path: 'data/view',
        component: CorpusadminDataManageVue,
      },
      {
        name: 'training',
        path: 'training',
        component: CorpusadminTrainingManageVue,
      },
    ],
  },
];

export default routes;
