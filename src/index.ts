import { test } from './test' // чтобы не писать расширения файлов, надо в webpack.config.js добавить
// resolve: {
//   extensions: ['.tsx', '.ts', '.js'],
// },
import CodeImageUrl from './assets/employee.png';
import FacebookBase64 from './assets/leafs.png';


const App = () => {
const Container = document.createElement('div');

const CodeImage = document.createElement('img');
Container.appendChild(CodeImage);
CodeImage.src = CodeImageUrl;


const FacebookImage = document.createElement('img');
Container.appendChild(FacebookImage);
FacebookImage.src = FacebookBase64;

return Container;
}

document.body.appendChild(App())
