const APIURL = 'https://app.nocodb.com/api/v2/tables/m5n8m0gg5cwg2y8/records';
const TOKEN = '91VxdgUr8q7TQ9RPiWUNIbyMykD_jN0HVfwk5jZa';

class ItemsController {
    constructor() {
        this.apiUrl = APIURL;
        this.token = TOKEN;
    }

    async getAllItems() {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async getItemById(id) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            }
        });

        const data = await response.json();
        return data;
    }

    async createItem(title, description, image, category, status) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                title, description, image, category, status
            })
        });

        const data = await response.json();
        return data;
    }

    async updateRecepta(id, title, description, image, category, status) {
        const response = await fetch(`${this.apiUrl}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                title, description, image, category, status
            })
        });

        const data = await response.json();
        return data;
    }

    async deleteRecepta(id) {
        const response = await fetch(`${this.apiUrl}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'xc-token': this.token
            },
            body: JSON.stringify({
                Id:id
            })
        });

        const data = await response.json();
        return data;
    }
}

export default ItemsController;
