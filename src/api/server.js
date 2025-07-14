import { createServer, Model } from 'miragejs';

createServer({
    models: {
        todo: Model,
        ticket: Model,
        project: Model,
        sales: Model,
        update: Model,
        traffic: Model,
    },

    seeds(server) {
        server.create('todo', { id: '1', title: 'Pick up kids from school', completed: false });
        server.create('todo', { id: '2', title: 'Prepare for presentation', completed: true });
        server.create('todo', { id: '3', title: 'Print statements', completed: false });
        server.create('todo', { id: '4', title: 'Create invoice', completed: false });
        server.create('todo', { id: '5', title: 'Call John', completed: true });
        server.create('todo', { id: '6', title: 'Meeting with Alice', completed: false });

        server.create('ticket', { id: 'WD-12345', subject: 'Fund is not recieved', status: 'Done', lastUpdated: 'Dec 5, 2017', assignee: 'David Grey' });
        server.create('ticket', { id: 'WD-12346', subject: 'High loading time', status: 'Progress', lastUpdated: '	Dec 12, 2017', assignee: ' Stella Johnson' });
        server.create('ticket', { id: 'WD-12347', subject: 'Website down for one week', status: 'on hold', lastUpdated: 'Dec 16, 2017', assignee: 'Marina Michel' });
        server.create('ticket', { id: 'WD-12348', subject: 'Loosing control on server', status: 'rejected', lastUpdated: 'Dec 03, 2017', assignee: 'John Doe' });

        server.create('project', { id: 'PRJ-001', name: 'Herman Beck', dueDate: 'May 15, 2015', progress: 30 });
        server.create('project', { id: 'PRJ-002', name: 'Messsy Adam', dueDate: 'Jul 1, 2015', progress: 60 });
        server.create('project', { id: 'PRJ-003', name: 'John Richards', dueDate: 'Apr 12, 2015', progress: 90 });
        server.create('project', { id: 'PRJ-004', name: 'Peter Meggik', dueDate: 'May 15, 2015', progress: 40 });
        server.create('project', { id: 'PRJ-005', name: 'Edward', dueDate: 'May 03, 2015', progress: 35 });
        server.create('project', { id: 'PRJ-006', name: 'Ronald', dueDate: 'May 05, 2015', progress: 70 });

        server.create('sale', { month: 'January', China: 20, USA: 40, UK: 70 });
        server.create('sale', { month: 'February', China: 40, USA: 30, UK: 10 });
        server.create('sale', { month: 'March', China: 15, USA: 20, UK: 30 });
        server.create('sale', { month: 'April', China: 35, USA: 10, UK: 40 });
        server.create('sale', { month: 'May', China: 25, USA: 50, UK: 25 });
        server.create('sale', { month: 'June', China: 50, USA: 15, UK: 50 });
        server.create('sale', { month: 'July', China: 30, USA: 35, UK: 15 });
        server.create('sale', { month: 'August', China: 20, USA: 40, UK: 30 });

        server.create('update', { weeklySales: { value: 15000, change: 60 }, weeklyOrders: { value: 456334, change: -10 }, visitorsOnline: { value: 955741, change: 5 } });

        server.create('traffic', { source: 'Search Engines', value: 30 });
        server.create('traffic', { source: 'Direct Click', value: 30 });
        server.create('traffic', { source: 'Bookmarks Click', value: 40 });

    },

    routes() {
        this.namespace = 'api';

        this.get('/sales-data', (schema) => {
            return schema.sales.all();
        });

        this.get('/updates', (schema) => {
            return schema.updates.all();
        });

        this.get('/todos', (schema) => {
            return schema.todos.all();
        });

        this.get('/tickets', (schema) => {
            return schema.tickets.all();
        });

        this.get('/projects', (schema) => {
            return schema.projects.all();
        });

        this.get('/traffic', (schema) => {
            return schema.traffics.all();
        });

        this.post('/todos', (schema, request) => {
            let attrs = JSON.parse(request.requestBody);
            return schema.todos.create(attrs);
        });

        this.delete('/todos/:id', (schema, request) => {
            let id = request.params.id;
            let todo = schema.todos.find(id);
            return todo.destroy();
        });

        this.patch('/todos/:id', (schema, request) => {
            let id = request.params.id;
            let todo = schema.todos.find(id);
            let attrs = JSON.parse(request.requestBody);
            todo.update(attrs);
            return todo;
        });
    }
});
