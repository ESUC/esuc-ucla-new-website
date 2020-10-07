import json

if __name__ == '__main__':
    s = "#{}-f:checked+label:after {{\n    top: 0;\n    width: 20px;\n    height: 20px;\n    border: 2px solid {} !important;\n    background-color: {} !important;\n    z-index: 0;\n}}\n"
    
    with open('orgs.json') as f:
        orgs = json.load(f)

    # print(orgs)

    for org in orgs:
        print(s.format(org['className'], org['color'], org['color']));

