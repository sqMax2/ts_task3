interface IComment {
	id: number;
	email: string;
}


const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

const getData = (url: string): Promise<IComment[]> => {
  return fetch(url)
	.then(response => {
	  if (response.ok) {
		return response.json();
	  } else {
		throw new Error(response.statusText);
	  }
	})
}

getData(COMMENTS_URL)
  .then((data: IComment[])  => {
	// console.log(data)
	data.forEach((item: IComment) => {
		console.log("ID: " + item.id + ", Email: " + item.email);
	})
  });

/**
 * ID: 1, Email: Eliseo...
 * ID: 2, Email: Jayne_Kuhic...
 * ID: 3, Email: Nikita...
 * ID: 4, Email: Lew...
 * ...
 */