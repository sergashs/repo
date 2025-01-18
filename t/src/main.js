import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Card, Col, Row, Empty, Input, InputNumber, Pagination, Button, Modal } from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(router);
app.use(Card);
app.use(Col);
app.use(Row);
app.use(Empty);
app.use(Input);
app.use(InputNumber);
app.use(Pagination);
app.use(Button);
app.use(Modal);
app.mount('#app');