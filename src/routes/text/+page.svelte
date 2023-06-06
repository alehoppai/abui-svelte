<script lang="ts">
	import Heading from '$lib/components/Heading.svelte'
	import Text from '$lib/components/Text.svelte'
	import StrickeThrough from '$lib/components/StrickeThrough.svelte'
	import Underline from '$lib/components/Underline.svelte'
	import Code from '$lib/components/Code.svelte'
	import Table from '$lib/components/Table.svelte'
	import Divider from '$lib/components/Divider.svelte'
</script>

<Heading level="3" text="Headings" />
<Divider />

<Heading level="1" text="This is a header level 1" />
<Code>{'<Heading level="1" text="This is a header level 1" />'}</Code>

<Heading level="2" text="This is a header level 2" />
<Code>{'<Heading level="2" text="This is a header level 2" />'}</Code>
<Heading level="3" text="This is a header level 3" />
<Code>{'<Heading level="3" text="This is a header level 3" />'}</Code>
<Heading level="4" text="This is a header level 4" />
<Code>{'<Heading level="4" text="This is a header level 4" />'}</Code>
<Heading level="5" text="This is a header level 5" />
<Code>{'<Heading level="5" text="This is a header level 5" />'}</Code>
<Heading level="6" text="This is a header level 6" />
<Code>{'<Heading level="6" text="This is a header level 6" />'}</Code>

<Heading level="4" text="API" />
<div class="w-1/3">
	<Table
		data={{
			headers: ['Property', 'Default Value', 'Description', 'Values'],
			rows: [
				['level', '1', 'Header level', '1, 2, 3, 4, 5, 6'],
				['text', '"empty string"', 'Header text', 'Any string'],
			],
		}}
	/>
</div>

<Heading level="3" text="Texts" />
<Divider />

<Text block>
	This is paragaph. Text to paragraph should be added as it's own child. You can place additional
	inline: <Text weight="bold">Inline bold</Text>, <Text weight="semibold">Or semibold</Text>,
	<Text weight="thin">Or even thin</Text>. You can also add <Text color="success">Success</Text>,
	<Text color="warning">Warning</Text>, <Text color="danger">Danger</Text>, <Text color="info"
		>Info</Text
	> colors. And you can also change the size of the text: <Text size="xs">Extra small</Text>, <Text
		size="sm">Small</Text
	>,
	<Text size="md">Medium</Text>, <Text size="lg">Large</Text>.
</Text>
<Code
	>{`<Text block>
	This is paragaph. Text to paragraph should be added as it's own child. You can place additional
	inline: <Text weight="bold">Inline bold</Text>, <Text weight="semibold">Or semibold</Text>,
	<Text weight="thin">Or even thin</Text>. You can also add <Text color="success">Success</Text>,
	<Text color="warning">Warning</Text>, <Text color="danger">Danger</Text>, <Text color="info">Info</Text> colors.
	And you can also change the size of the text: <Text size="xs">Extra small</Text>, <Text size="sm">Small</Text>,
	<Text size="md">Medium</Text>, <Text size="lg">Large</Text>.
</Text>
`}</Code
>

<Text block>
	To use available decorations you'll have to use separate components for them. This is Tailwind
	limitation and we could nothing to do with this. <StrickeThrough>Crossed text</StrickeThrough> can
	use every property simple inline text can use. Another decoration available is <Underline
		weight="bold">Underline</Underline
	> with same properties as simple inline text.
</Text>
<Code
	>{`<Text block>
	To use available decorations you'll have to use separate components for them. This is Tailwind
	limitation and we could nothing to do with this.
	<StrickeThrough>Crossed text</StrickeThrough> can use every property simple inline text can use.
	Another decoration available is <Underline weight="bold">Underline</Underline> with same properties
	as simple inline text.
</Text>
`}</Code
>

<Heading level="4" text="API" />
<div class="w-1/3">
	<Table
		data={{
			headers: ['Property', 'Default Value', 'Description', 'Values'],
			rows: [
				[
					'block',
					'false',
					"By default component is inline span, by passing block prop it'll become paragraph",
					'true, false',
				],
				[
					'color',
					'default',
					'Text color (default color being set through theme store)',
					'success, warning, danger, info, default',
				],
				['size', 'md', 'Text size', 'xs, sm, md, lg'],
				['weight', 'normal', 'Text weight', 'thin, normal, semibold, bold'],
			],
		}}
	/>
</div>
