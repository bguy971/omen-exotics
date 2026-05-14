import { supabase } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

export default async function DebugCatalog() {
  const productsResult = await supabase
    .from('products')
    .select('*')
    .order('created_at', { ascending: true });

  const variantsResult = await supabase
    .from('product_variants')
    .select('*')
    .order('created_at', { ascending: true });

  return (
    <main style={{ padding: 40, color: 'white', background: '#111' }}>
      <h1>Catalog Debug</h1>

      <h2>Products Error</h2>
      <pre>{JSON.stringify(productsResult.error, null, 2)}</pre>

      <h2>Products Data</h2>
      <pre>{JSON.stringify(productsResult.data, null, 2)}</pre>

      <h2>Variants Error</h2>
      <pre>{JSON.stringify(variantsResult.error, null, 2)}</pre>

      <h2>Variants Data</h2>
      <pre>{JSON.stringify(variantsResult.data, null, 2)}</pre>
    </main>
  );
}