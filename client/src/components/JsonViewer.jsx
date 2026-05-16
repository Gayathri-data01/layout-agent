export default function JsonViewer({ layout }) {
  return (
    <pre className="text-xs overflow-auto h-full bg-gray-100 p-4">
      {JSON.stringify(layout, null, 2)}
    </pre>
  );
}