/* eslint-disable class-methods-use-this */
import defaultHtmlSerializer from './richtext.schema';

const escapeHTML = (string: string) => {
	const htmlEscapes = {
		'&': '&amp',
		'<': '&lt',
		'>': '&gt',
		'"': '&quot',
		"'": '&#39'
	};

	const reUnescapedHtml = /[&<>"']/g;
	const reHasUnescapedHtml = new RegExp(reUnescapedHtml.source);

	return string && reHasUnescapedHtml.test(string)
		? string.replace(
				reUnescapedHtml,
				chr => htmlEscapes[chr as keyof typeof htmlEscapes]
		  )
		: string;
};

class RichTextResolver {
	private readonly marks: Record<string, Function>;

	private readonly nodes: Record<string, Function>;

	public constructor(schema = defaultHtmlSerializer) {
		this.marks = schema.marks;
		this.nodes = schema.nodes;
	}

	public addNode(key: string, schema: any) {
		this.nodes[key] = schema;
	}

	public addMark(key: string, schema: any) {
		this.marks[key] = schema;
	}

	public render(data: any) {
		let html = '';

		// TODO use reduce
		data.content.forEach((node: any) => {
			html += this.renderNode(node);
		});

		return html;
	}

	private renderNode(item: any) {
		const html = [];

		if (item.marks) {
			item.marks.forEach((m: any) => {
				const mark = this.getMatchingMark(m);

				if (mark) {
					html.push(this.renderOpeningTag(mark.tag));
				}
			});
		}

		const node = this.getMatchingNode(item);

		if (node && node.tag) {
			html.push(this.renderOpeningTag(node.tag));
		}

		if (item.content) {
			item.content.forEach((content: any) => {
			const newContent = {...content}
			if(newContent?.type === 'text'){
				const isLinkType = newContent?.marks?.find((i: any) => i.type === 'link' )
				if(isLinkType){
					const isUnderLineAttrFound = newContent?.marks?.find((i: any) => i.type === 'underline' )
					const isBoldAttrFound = newContent?.marks?.find((i: any) => i.type === 'bold' )
					if(!isUnderLineAttrFound){
						newContent.marks = [...newContent.marks, {type: 'underline'}]
					}
					if(!isBoldAttrFound){
						newContent.marks = [...newContent.marks, {type: 'bold'}]
					}
				}
			}
				html.push(this.renderNode(newContent));
			});
		} else if (item.text) {
			html.push(escapeHTML(item.text));
		} else if (node && node.singleTag) {
			html.push(this.renderTag(node.singleTag, ' /'));
		} else if (node && node.html) {
			html.push(node.html);
		}

		if (node && node.tag) {
			html.push(this.renderClosingTag(node.tag));
		}

		if (item.marks) {
			item.marks.reverse().forEach((m: any) => {
				const mark = this.getMatchingMark(m);

				if (mark) {
					html.push(this.renderClosingTag(mark.tag));
				}
			});
		}

		return html.join('');
	}

	private renderTag(tags: any, ending: any) {
		if (tags.constructor === String) {
			return `<${tags}${ending}>`;
		}

		const all = tags.map((tag: any) => {
			if (tag.constructor === String) {
				return `<${tag}${ending}>`;
			}

			let h = `<${tag.tag}`;
			if (tag.attrs) {
				Object.keys(tag.attrs).forEach(key => {
					const value = tag.attrs[key];
					if (value !== null) {
						h += ` ${key}="${value}"`;
					}
				});
			}

			return `${h}${ending}>`;
		});

		return all.join('');
	}

	private renderOpeningTag(tags: any) {
		return this.renderTag(tags, '');
	}

	private renderClosingTag(tags: any) {
		if (tags.constructor === String) {
			return `</${tags}>`;
		}

		const all = tags.reverse().map((tag: any) => {
			if (tag.constructor === String) {
				return `</${tag}>`;
			}

			return `</${tag.tag}>`;
		});

		return all.join('');
	}

	private getMatchingNode(item: any) {
		if (typeof this.nodes[item.type] !== 'function') {
			return null;
		}

		return this.nodes[item.type](item);
	}

	private getMatchingMark(item: any) {
		if (typeof this.marks[item.type] !== 'function') {
			return null;
		}
		let updatedItem = {...item}
		if(item?.attrs?.linktype === 'email') {
			const updatedHref = `mailto:${item?.attrs?.href}`
			const attrs = {...item?.attrs, href: updatedHref}
			updatedItem = {...updatedItem,attrs}
		}

		if(item?.attrs?.linktype === 'story'){
			const tempHref = item?.attrs?.href
			if(tempHref?.substr(tempHref?.length - 1) !== '/'){
				const updatedHref = `${item?.attrs?.href}/`
				const attrs = {...item?.attrs, href: updatedHref}
				updatedItem = {...updatedItem,attrs}
			}
			
		}

		return this.marks[item.type](updatedItem);
	}
}
/* eslint-enable class-methods-use-this */

export default RichTextResolver;
