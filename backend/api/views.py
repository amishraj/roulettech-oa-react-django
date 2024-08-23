from django.shortcuts import render

from django.http import JsonResponse

# data for the API
core_concepts_data = [
    {
        'title': 'Components',
        'description': 'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
        'title': 'JSX',
        'description': 'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
        'title': 'Props',
        'description': 'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
        'title': 'State',
        'description': 'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    }
]

components_data = {
    'components': {
        'title': 'Components',
        'description': 'Components are the building blocks of React applications.',
        'code': '<h1>Hello, World!</h1>',
    },
    'jsx': {
        'title': 'JSX',
        'description': 'JSX allows you to write HTML-like syntax in your JavaScript.',
        'code': 'const element = <h1>Hello, world!</h1>;',
    },
    'props': {
        'title': 'Props',
        'description': 'Props allow you to pass data to components.',
        'code': '<Welcome name="Sara" />',
    },
    'state': {
        'title': 'State',
        'description': 'State is used to manage data within a component.',
        'code': 'const [count, setCount] = useState(0);',
    }
}

def get_core_concepts(request):
    return JsonResponse(core_concepts_data, safe=False)

def get_components(request):
    return JsonResponse(components_data)

def get_component(request, name):
    component = components_data.get(name, {})
    return JsonResponse(component)