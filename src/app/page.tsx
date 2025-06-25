import { Button } from "@/components/ui/button";
import * as actions from "@/actions"

export default function Home() {
  return (
    <form action={actions.signIn}>
      <Button type="submit">sign in</Button>
    </form>
  );
}
