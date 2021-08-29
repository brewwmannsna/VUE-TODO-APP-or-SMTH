var todoe = new Vue({
			el: "#a",
			data: {
				message: "",
				todos: bigtodos,
				error: false
			},
			methods: {
				Add: function () {
					if (this.message.length !== 0) {
						this.error = false;
						this.todos = [...this.todos, { text: this.message, done: false }];
						localStorage.todos = JSON.stringify(this.todos);
						this.message = "";
						this.id = this.id + 1;
					}
					else{
						this.error = true;
					}
				},
				Delete: function (id) {
					this.todos.splice(this.todos.indexOf(id), 1);
				},
				Strike: function (todo) {
					todo.done = !todo.done;
				}
			}
		});