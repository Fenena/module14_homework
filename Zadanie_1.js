const parser = new DOMParser();

const xmlString = `
	<list>
		<student>
			<name lang="en">
        <first>Ivan</first>
        <second>Ivanov</second>
			</name>
			<age>35</age>
			<prof>teacher</prof>
		</student>
		<student>
			<name lang="ru">
        <first>Петр</first>
        <second>Петров</second>
      </name>
      <age>58</age>
      <prof>driver</prof>
		</student>
	</list>
`;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const listNode = xmlDOM.querySelector('list');
const studentNode = listNode.querySelectorAll('student');
for(var i = 0; i < studentNode.length; i++){
	const res = {
  	name: studentNode[i].querySelector('first').textContent + ' ' + studentNode[i].querySelector('second').textContent,
		age: studentNode[i].querySelector('age').textContent,
		prof: studentNode[i].querySelector('prof').textContent,
    lang: studentNode[i].querySelector('name').getAttribute('lang'),
  };
  console.log(res);
}
