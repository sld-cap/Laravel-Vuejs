/**
 * component
 */
import LoginVue from '../../vue/login/Main.vue';
// CAP管理画面
import DashboardVue from '../../vue/capAdmin/Dashboard.vue';
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
  {
    path: '/',
    component: DashboardVue,
    meta: { requiresAuth: true },
  },
  {
    path: '/corpus',
    component: DashboardVue,
    meta: { requiresAuth: true },
  },
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
