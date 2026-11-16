import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-shell flex-col items-center px-6 py-32 text-center">
      <h1 className="text-headline font-semibold">Page not found.</h1>
      <p className="mt-3 text-steel">The page you’re looking for doesn’t exist.</p>
      <Button as={Link} to="/" className="mt-8" arrow>
        Back to demchada.com
      </Button>
    </div>
  )
}
