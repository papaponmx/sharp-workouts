
  const proxyquire = require("proxyquire")
  const fs = require('fs')
  const path = require('path')
  const files = {}
  const fileOverrides = {"file:///Users/papaponmx/Projects/sharp-workouts/web/src/App.tsx":"import { AuthProvider } from '@redwoodjs/auth'\nimport { Magic } from 'magic-sdk'\nimport { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'\nimport { RedwoodApolloProvider } from '@redwoodjs/web/apollo'\n\nimport FatalErrorPage from 'src/pages/FatalErrorPage'\nimport Routes from 'src/Routes'\n\nimport './index.css'\n\nconst m = new Magic(process.env.MAGICLINK_PUBLIC)\n\nconst App = () => (\n  <FatalErrorBoundary page={FatalErrorPage}>\n    <RedwoodProvider titleTemplate=\"%PageTitle | %AppTitle\">\n      <AuthProvider client={m} type=\"magicLink\">\n        <RedwoodApolloProvider>\n          <Routes />\n        </RedwoodApolloProvider>\n      </AuthProvider>\n    </RedwoodProvider>\n  </FatalErrorBoundary>\n)\n\nexport default App\n","file:///Users/papaponmx/Projects/sharp-workouts/web/src/Routes.tsx":"// In this file, all Page components from 'src/pages` are auto-imported. Nested\n// directories are supported, and should be uppercase. Each subdirectory will be\n// prepended onto the component name.\n//\n// Examples:\n//\n// 'src/pages/HomePage/HomePage.js'         -> HomePage\n// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage\n\nimport { Router, Route } from '@redwoodjs/router'\n\nconst Routes = () => {\n  return (\n  <Router useAuth={useAuth}>\n      <Route notfound page={NotFoundPage} />\n    </Router>\n  )\n}\n\nexport default Routes\n"}
  const FILE_SCHEME = 'file://'

  function URL_file(f) {
    if (f.startsWith(FILE_SCHEME))
      f = f.substr(FILE_SCHEME.length)
    return new URL(FILE_SCHEME + path.normalize(f)).href
  }

  proxyquire('@redwoodjs/cli/dist', {
    fs: {
      mkdir() {},
      mkdirSync(...args) {},
      writeFile(a, b) {
        files[URL_file(a)] = b
      },
      writeFileSync(a, b) {
        files[URL_file(a)] = b
      },
      readFileSync(...args) {
        const f = URL_file(args[0])
        if (fileOverrides[f]) return fileOverrides[f]
        return fs.readFileSync.apply(fs, args)
      },
      '@global': true,
    },
  })

  process.on('exit', () => {
    console.log("---------===----===--------")
    console.log(JSON.stringify(files, null, 2))
  })
  