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
      },
      {
        name: 'corpusManage',
        path: '/corpus',
        component: CorpusManageVue,
      },
      {
        name: 'apiManage',
        path: '/api-info',
        component: ApiManageVue,
      },
      {
        name: 'serviveManage',
        path: '/setting',
        component: ServieManageVue,
      },
      {
        name: 'help',
        path: '/help',
        component: HelpVue,
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
