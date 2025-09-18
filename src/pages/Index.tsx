import { useState } from "react";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [loadingStates, setLoadingStates] = useState({
    default: false,
    secondary: false,
    outline: false,
    destructive: false,
  });

  const toggleLoading = (type: keyof typeof loadingStates) => {
    setLoadingStates(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Button Skeleton Loading States</h1>
          <p className="text-xl text-muted-foreground">
            Beautiful skeleton loading animations for buttons
          </p>
        </div>

        <div className="space-y-12">
          {/* Default Button */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Default Variant</h2>
            <div className="flex items-center gap-4">
              <Button 
                loading={loadingStates.default}
                onClick={() => toggleLoading('default')}
              >
                {loadingStates.default ? 'Loading...' : 'Toggle Loading'}
              </Button>
              <Button 
                size="sm"
                loading={loadingStates.default}
              >
                Small Button
              </Button>
              <Button 
                size="lg"
                loading={loadingStates.default}
              >
                Large Button
              </Button>
            </div>
          </div>

          {/* Secondary Button */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Secondary Variant</h2>
            <div className="flex items-center gap-4">
              <Button 
                variant="secondary"
                loading={loadingStates.secondary}
                onClick={() => toggleLoading('secondary')}
              >
                {loadingStates.secondary ? 'Processing...' : 'Toggle Loading'}
              </Button>
              <Button 
                variant="secondary"
                size="sm"
                loading={loadingStates.secondary}
              >
                Save Changes
              </Button>
            </div>
          </div>

          {/* Outline Button */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Outline Variant</h2>
            <div className="flex items-center gap-4">
              <Button 
                variant="outline"
                loading={loadingStates.outline}
                onClick={() => toggleLoading('outline')}
              >
                {loadingStates.outline ? 'Submitting...' : 'Toggle Loading'}
              </Button>
              <Button 
                variant="outline"
                size="lg"
                loading={loadingStates.outline}
              >
                Submit Form
              </Button>
            </div>
          </div>

          {/* Destructive Button */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Destructive Variant</h2>
            <div className="flex items-center gap-4">
              <Button 
                variant="destructive"
                loading={loadingStates.destructive}
                onClick={() => toggleLoading('destructive')}
              >
                {loadingStates.destructive ? 'Deleting...' : 'Toggle Loading'}
              </Button>
              <Button 
                variant="destructive"
                size="sm"
                loading={loadingStates.destructive}
              >
                Delete Account
              </Button>
            </div>
          </div>

          {/* Always Loading Examples */}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Always Loading Examples</h2>
            <div className="flex items-center gap-4">
              <Button loading={true}>Loading State</Button>
              <Button variant="secondary" loading={true}>Processing</Button>
              <Button variant="outline" loading={true}>Submitting</Button>
              <Button variant="destructive" loading={true}>Deleting</Button>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">How to Use</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>• Add the <code className="bg-background px-2 py-1 rounded">loading</code> prop to any Button component</p>
              <p>• The button will show a beautiful skeleton loading animation</p>
              <p>• Works with all button variants and sizes</p>
              <p>• Click the toggle buttons above to see the loading states in action</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;