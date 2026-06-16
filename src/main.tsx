
import { withClerkProvider } from './withClerkProvider';
import App from './App';
import { createRoot } from 'react-dom/client';
import './index.css';

const ClerkApp = withClerkProvider(App);
createRoot(document.getElementById("root")!).render(<ClerkApp />);
