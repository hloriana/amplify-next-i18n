const pick = (attrs: any, allowed: any) => {
	if (!attrs) {
		return null;
	}

	const h: Record<string, any> = {};
	Object.keys(attrs).forEach(key => {
		const value = attrs[key];
		if (allowed.indexOf(key) > -1 && value !== null) {
			h[key] = value;
		}
	});

	return h;
};

const schema = {
	nodes: {
		horizontal_rule() {
			return {
				singleTag: 'hr'
			};
		},
		blockquote() {
			return {
				tag: 'blockquote'
			};
		},
		bullet_list() {
			return {
				tag: [
					{
						tag: 'ul',
						attrs: {
							class: 'list-disc pl-5 my-2'
						}
					}
				]
			};
		},
		code_block(node: any) {
			return {
				tag: [
					'pre',
					{
						tag: 'code',
						attrs: node.attrs
					}
				]
			};
		},
		hard_break() {
			return {
				singleTag: 'br'
			};
		},
		heading(node: any) {
			return {
				tag: `h${node.attrs.level}`
			};
		},
		image(node: any) {
			return {
				singleTag: [
					{
						tag: 'img',
						attrs: pick(node.attrs, ['src', 'alt', 'title'])
					}
				]
			};
		},
		list_item() {
			return {
				tag: 'li'
			};
		},
		ordered_list() {
			return {
				tag: [
					{
						tag: 'ol',
						attrs: {
							class: 'list-decimal pl-5 my-2'
						}
					}
				]
			};
		},
		paragraph() {
			return {
				tag: 'p'
			};
		}
	},
	marks: {
		bold() {
			return {
				tag: 'b'
			};
		},
		strike() {
			return {
				tag: 'strike'
			};
		},
		underline() {
			return {
				tag: 'u'
			};
		},
		strong() {
			return {
				tag: 'strong'
			};
		},
		code() {
			return {
				tag: 'code'
			};
		},
		italic() {
			return {
				tag: 'i'
			};
		},
		link(node: any) {
			return {
				tag: [
					{
						tag: 'a',
						attrs: node.attrs
					}
				]
			};
		},
		styled(node: any) {
			return {
				tag: [
					{
						tag: 'span',
						attrs: node.attrs
					}
				]
			};
		}
	}
};

export default schema;
