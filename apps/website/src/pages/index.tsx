import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import {Button} from "@my-workspace/ui-components";

const IndexPage: React.FC<PageProps> = () => {
  return (
      <main>
          <p>Welcome to gatsby app</p>
          <span>______</span>
          <Button name="My Button" onClick={() => {}} variant="primary" />
      </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
