import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabasePublishableKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_DEFAULT_KEY!;
const supabase = createClient(supabaseUrl, supabasePublishableKey)

export async function POST(request: Request) {
    
    const { data, error } = await supabase
        .from('early-adopters')
        .insert([
            { some_column: 'someValue' },
            { some_column: 'otherValue' },
        ])
        .select()
}
