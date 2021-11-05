import {
  Page,
  Navbar,
  Block,
  Button,
  List,
  ListItem,
  BlockTitle,
} from 'tailwind-mobile/react';

export default function Home() {
  return (
    <Page>
      <Navbar title="My App" />

      <Block strong>
        <p>
          Here is your Next.js & Tailwind Mobile app. Let's see what we have
          here.
        </p>
      </Block>
      <BlockTitle>Navigation</BlockTitle>
      <List>
        <ListItem href="/" title="Index" />
        <ListItem href="/games" title="Games" />
      </List>

      <Block strong className="flex space-x-4">
        <Button>Button 1</Button>
        <Button>Button 2</Button>
      </Block>
    </Page>
  );
}
