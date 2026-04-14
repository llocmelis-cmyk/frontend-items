export function QuantityBadge({ quantity }: { quantity: number }) {
    let colors = 'bg-yellow-50 text-yellow-800 ring-yellow-600/20 ';

    switch (true) {
        case quantity > 0:
            colors = 'bg-green-50 text-green-800 ring-green-600/20 ';
            break;
        case quantity < 0:
            colors = 'bg-red-50 text-red-800 ring-red-600/20 ';
            break;
    }

    return (
        <>
                <span style={{backgroundColor: "red"}}>
                        {$quantity}
                    </span>
        </>
    );
}
